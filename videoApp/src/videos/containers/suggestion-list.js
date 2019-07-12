import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/verticalSeparator'

export default class SuggestionList extends Component {
    
    renderEmpty = () => <Empty text="No hay sugerencias :("/> 
    itemSeparator = () => <Separator /> 
    
    
    render() {
        const list =[
            {
                title: 'Avengers',
                key: '1',
            },
            {
                title: 'Pokemon',
                key: '2'
            },
            {
                title: 'Auto',
                key: '3'
            }
        ]
        return (
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({item}) =><Text>{item.title}</Text>}
                />
            </Layout>
        )
    }
}
