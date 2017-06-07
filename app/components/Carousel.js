
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  carouselContentContainer: {
  },
  carouselPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default class extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.element).isRequired,
    currentSlideIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.onScrollViewLayout = this.onScrollViewLayout.bind(this);
    this.setScrollViewRef = this.setScrollViewRef.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {
      width: 100,
      height: 100,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSlideIndex !== this.props.currentSlideIndex) {
      console.log('currentSlideIndex', prevProps, this.props);
      this.scrollToSlide(this.props.currentSlideIndex);
    }
  }

  onScroll = (event) => {
    console.log(event);
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
        onScroll{this.onScroll}
        contentContainerStyle={styles.carouselContentContainer}
      >
        {slideViews}
      </ScrollView>
    );
  }
}
