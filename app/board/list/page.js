import React from 'react';
import { connectDB } from '@/util/database';
import ListItem from './ListItem';

export default async function ListPage() {
    let db = (await connectDB).db('Forum');
    let result = await db.collection('post').find().toArray();
    return (
        <div>
            <h1>List</h1>
            <ListItem result={JSON.stringify(result)} />
        </div>
    )
}