import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import { Button, Header } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Info as styles } from './Styles/StyleHome';
import { ButtonSlider } from './Common';


import { connect } from 'react-redux';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            activeSlide: 1,   // Position of picture active
        }
    }

    // When first run activeSlide change to position number 0
    componentDidMount() {
        this.setState({ activeSlide: 0 })
    }

    // Show Images of Slider
    _renderItem({ item, index }) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ccc',
                flexDirection: 'row',
                paddingLeft: 0,
                marginLeft: 0
            }}>
                <Image source={item} />
            </View>
        );
    };

    // Show icon Dot of Slider
    get pagination() {
        const { activeSlide } = this.state;
        let {urlSlider} = this.props.contentInfo;
        return (
            <Pagination
                dotsLength={urlSlider.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    marginHorizontal: 0,
                    backgroundColor: '#FF7F88',

                }}
                inactiveDotStyle={{
                    backgroundColor: '#B9B0B0',
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={0.9}
                carouselRef={this._carousel}
                tappableDots={!!this._carousel || false}
            />
        );
    }

    //Plugin of Slider Note: read document in Carousel 
    //link: https://goo.gl/tZgFNp
    Carousels = () => (
        <Carousel
            ref={(c) => { this._carousel = c }}
            data={this.props.contentInfo.urlSlider} // conect to url ImageLegnth
            renderItem={this._renderItem}           // render element picture
            sliderWidth={272}                       // width = 272
            itemWidth={272}                         // item have width = 272
            itemHeight={272}                        // item have height = 272
            sliderHeight={272}                      // Box of slider = 272
            swipeThreshold={0}                      // please!, read document in Carousel link: https://goo.gl/tZgFNp
            activeSlideOffset={0}
            layoutCardOffset={0}
            onSnapToItem={(index) => this.setState({ activeSlide: index })} // event when touch on screen
            inactiveSlideScale={1}
            loop={false} /> // no loop
    )


    ComponentSlider = () => {
        let { urlSlider } = this.props.contentInfo;
        let opacityPrev = (this.state.activeSlide > 0) ? 1 : 0;
        let opacityNext = (this.state.activeSlide < urlSlider.length - 1) ? 1 : 0;
        return (
            <View style={styles.Slider}>
                <ButtonSlider _onPress={() => { this._carousel.snapToPrev(); }}>
                    <Image source={require('./../images/arrowLeft.png')} style={{ opacity: opacityPrev }} />
                </ButtonSlider>

                <View style={styles.Picture}>
                    {this.Carousels()}
                </View>

                <ButtonSlider _onPress={() => { this._carousel.arrowRight(); }} >
                    <Image source={require('./../images/arrowRight.png')} style={{ opacity: opacityNext }} />
                </ButtonSlider>
            </View>
        )
    }

    // Render Component
    render() {
        let { urlSlider, title, descript } = this.props.contentInfo;
        let opacityPrev = (this.state.activeSlide > 0) ? 1 : 0;
        let opacityNext = (this.state.activeSlide < urlSlider.length - 1) ? 1 : 0;

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <LinearGradient colors={['#fff', '#fff', '#ffdfe1']} style={styles.LinearGradient}>
                    {this.ComponentSlider()}

                    <View style={styles.Main}>
                        <Text style={styles.Title}> {title} </Text>
                        <Text style={styles.DesText}> {descript} </Text>
                    </View>

                    {this.pagination}
                </LinearGradient>

                <Button full style={styles.ButtonFooter}
                    onPress={() => this.props.navigation.navigate('screenHome')}>
                    <Text style={styles.textColor}>TRY TO USE </Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ contentInfo: state.contentInfo })

export default connect(mapStateToProps, null)(Info)