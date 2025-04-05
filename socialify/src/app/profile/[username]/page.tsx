import { getProfileByUserName, getUserPosts, getUserLikedPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "@/app/profile/[username]/ProfilePageClient";

export async function generateMetadata({ 
  params 
}: { 
  params: { username: string } 
}) {
  try {
    const user = await getProfileByUserName(params.username);
    
    if (!user) {
      return {
        title: 'Profile Not Found',
        description: 'The requested profile does not exist.',
      };
    }

    const title = user.name || user.username;
    const description = user.bio || `Check out ${user.username}'s profile.`;

    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: `/profile/${user.username}`,
        type: 'profile',
      },
      twitter: {
        card: 'summary',
        title: title,
        description: description,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Profile',
      description: 'User profile page',
    };
  }
}
async function profilePageServer({params}: {params: {username: string}}) {
    const user = await getProfileByUserName(params.username);
    if (!user) notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id)
    ]);
    
    return (
      <ProfilePageClient
        user={user}
        posts={posts}
        likedPosts={likedPosts}
        isFollowing={isCurrentUserFollowing}
      />
    )
}

export default profilePageServer;
