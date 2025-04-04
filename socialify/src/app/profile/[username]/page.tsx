
async function profilePage({params}: {params: {username: string}}) {
    console.log("params:" , params.username);
    
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));  // Simulate a delay of 5 seconds
    return (
        <div>
            <h1>Profile Page baby</h1>
        </div>
    )
}

export default profilePage;
