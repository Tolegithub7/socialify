"use client";

import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { getPosts, toggleLike, deletePost, createComment } from '@/actions/post.action';
import { toast } from 'react-hot-toast';

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];


async function PostCard({ post, dbUserId }:{ post:Post, dbUserId:string | null}) {
  const user = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(post.likes.some(like => like.userId === dbUserId));
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes);

  const handleLike = async () => {
    if (isLiking) return;
    try {
      setIsLiking(true)
      setHasLiked(prev => !prev)
      setOptimisticLikes(prev => prev + (hasLiked ? -1 : 1))
      await toggleLike(post.id)
    } catch (error) {
      setOptimisticLikes(post._count.likes)
      setHasLiked(post.likes.some(like => like.userId === dbUserId))
    } finally {
      setIsLiking(false)
    }
  };
  const handleAddComment = async () => {
    if (!newComment.trim() || isCommenting) return;

    try {
      setIsCommenting(true);
      const result = await createComment(post.id, newComment);
      if (result?.success) {
        toast.success("Comment Post Successfully!")
        setNewComment("");
      }
    } catch (error) {
      toast.error("Failed to add comment post");
    } finally {
      setIsCommenting(false);
    };
  };
  const handleDeletePost = async () => {
    if (isDeleting) return;
    try {
      setIsDeleting(true);
      const result = await deletePost(post.id);
      if (result.success) toast.success("Post Delete Successfully!");
      else throw new Error(result.error); //
    } catch (error) {
      toast.error("Failed to delete post");
    } finally {
      setIsDeleting(false);
    };
  };

  return (
    <>
      
    </>
  )
}

export default PostCard;
