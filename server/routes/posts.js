import express from 'express'
const router = express.Router();
import { getFeedPosts, getUserPosts, likePosts} from '../controllers/posts.js'
import {verifyToken} from '../middleware/auth.js'

router.route('/').get( verifyToken, getFeedPosts);
router.route('/:userId/posts').get( verifyToken, getUserPosts);
router.route('/:id/like').get( verifyToken, likePosts)

export default router