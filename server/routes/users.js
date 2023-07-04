import express from  'express'
import {
    getUser, 
    getUserFriedns,
    addRemoveFriends
}  from '../controllers/users.js'
import {verifyToken}  from '../middleware/auth.js'
const router  = express.Router();
 
router.route('/:id').get( verifyToken, getUser);
router.route('/:id/friends').get(verifyToken, getUserFriedns);
router.route('/:id/:friendId').patch(verifyToken, addRemoveFriends);

export default router;