import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { Card, Container} from 'react-bootstrap'

const PostPage = () => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: '',
    })

    const {id} = useParams()

    useEffect(() => {

    })
}

export default PostPage()