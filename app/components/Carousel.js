
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    flexGrow: 1,
  },
  carouselContentContainer: {
  },
  carouselPage: {
    padding: 20,
  },
});

export default class extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.element).isRequired,
    currentSlideIndex: PropTypes.number.isRequired,
    onSlideScroll: PropTypes.func,
  }
  static defaultProps = {
    onSlideScroll: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSlideIndex !== this.props.currentSlideIndex) {
      this.scrollToSlide(this.props.currentSlideIndex);
    }
  }

  onScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const slideWidth = this.state.width;
    const slideIndex = Math.round(offset / slideWidth);

    this.props.onSlideScroll(slideIndex);
  }

  onScrollViewLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  }

  setScrollViewRef = (ref) => {
    this.scrollViewRef = ref;
  }

  scrollToSlide(index = 0) {
    const x = this.state.width * index;
    const y = 0;
    this.scrollViewRef.scrollTo({ x, y, animated: false });
  }

  render() {
    const {
      slides,
    } = this.props;

    const slideViews = slides.map((slide, key) => (
      <View
        key={key}
        style={[styles.carouselPage, {
          width: this.state.width,
          height: this.state.height,
        }]}
      >
        {slide}
      </View>
    ));

    return (
      <ScrollView
        ref={this.setScrollViewRef}
        horizontal
        pagingEnabled
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        styles={styles.carousel}
        onLayout={this.onScrollViewLayout}
        onScroll={this.onScroll}
        scrollEventThrottle={0}
        contentContainerStyle={styles.carouselContentContainer}
      >
        {slideViews}
      </ScrollView>
    );
  }
}
