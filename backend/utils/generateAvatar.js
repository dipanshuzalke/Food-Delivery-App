

const generateAvatar = (username) =>{
    
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`
}

export default generateAvatar;