import React, { PureComponent } from 'react';
import { StatusBar, SafeAreaView, View, Text, FlatList } from 'react-native';
import { events } from '../../app/models';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {
    EventCategory,
    Hero,
    Grid
} from '../../components'

class Home extends PureComponent {
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#685BA900" translucent={true} />
                <SafeAreaView>
                    <FlatList
                        data={events}
                        initialNumToRender={2}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => <Hero />}
                        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#dadada', marginBottom: 30 }} />}
                        ListItemComponent={({ index, item }) =>
                            // index != lastIndex ?
                            //     <EventCategory events={item.events} title={item.title} /> :
                                <Grid events={item.events} title={item.title} />
                        }
                        keyExtractor={(_, index) => index.toString()}
                    />

                </SafeAreaView>
            </>
        )
    }
}

export default Home