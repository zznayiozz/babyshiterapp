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

// url images for application slider
const ImageLegnth = [
    require('./../images/picture_01.png'),
    require('./../images/picture_02.png'),
    require('./../images/picture_01.png'),
    require('./../images/picture_02.png'),
    require('./../images/picture_01.png'),
];

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ImageLegnth,  //  Data have type is array "const ImageLegnth]"
            activeSlide: 1,     // Position of picture active
        }
    }

    // When first run activeSlide change to position number 0
    componentDidMount() {
        this.setState({activeSlide: 0})
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
        const { activeSlide, data } = this.state;
        return (
            <Pagination
                dotsLength={data.length}
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
            data={this.state.data}                  // conect to url ImageLegnth
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

    //Show  Button  Prev
    ShowArrowPrev() {
        let opacity = (this.state.activeSlide > 0) ? 1 : 0;  // Position of picture active
        return (
            <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}
                onPress={() => { this._carousel.snapToPrev(); }} >
                <Image source={require('./../images/arrowLeft.png')} style={{ opacity: opacity }} />
            </TouchableOpacity>
        )
    }

    //Show  Button  Next
    ShowArrowNext() {
        let opacity = (this.state.activeSlide < this.state.data.length - 1) ? 1 : 0;
        return (
            <TouchableOpacity onPress={() => { this._carousel.snapToNext(); }}
                hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}>
                <Image source={require('./../images/arrowRight.png')} style={{ opacity: opacity }} />
            </TouchableOpacity>
        )
    }

    // Render Component
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <LinearGradient
                    colors={['#fff', '#fff', '#ffdfe1']}
                    style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <View style={styles.Slider}>
                        {this.ShowArrowPrev()}

                        <View style={styles.Picture}>
                            {this.Carousels()}
                        </View>

                        {this.ShowArrowNext()}
                    </View>


                    <View style={styles.Main}>
                        <View>
                            <Text style={styles.Title}>Find your true baby shitter </Text>
                        </View>
                        <View style={styles.Des}>
                            <Text style={styles.DesText}>
                                Use this app when you want to find a {'\n'}
                                shitters and hellp you to take case of your {'\n'}
                                childrens. Its just steps for you to follow.
                                </Text>
                        </View>
                    </View>

                    {this.pagination}
                </LinearGradient>

                <Button
                    full
                    style={styles.ButtonFooter}
                    onPress={() => this.props.navigation.navigate('screenHome')}>
                    <Text style={styles.textColor}>TRY TO USE </Text>
                </Button>
            </View>
        );
    }
}