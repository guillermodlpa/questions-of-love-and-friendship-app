
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
  static get propTypes() {
    return {
      slides: PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.onScrollViewLayout = this.onScrollViewLayout.bind(this);

    this.state = {
      width: 100,
      height: 100,
    };
  }

  onScrollViewLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
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
        horizontal
        pagingEnabled
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        styles={styles.carousel}
        onLayout={this.onScrollViewLayout}
        contentContainerStyle={styles.carouselContentContainer}
      >
        {slideViews}
      </ScrollView>
    );
  }
}
