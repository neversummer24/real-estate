 import jwt from "jsonwebtoken";
 
 export const shouldBeAdmin = (req, res) => {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "You are not an admin!" });
   
  };


  export const shouldBeLoggedIn = (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated!" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (err) return res.status(403).json({ message: "Token is not Valid!" });
      
      res.status(200).json({ message: "You are logged in!" }); 
    });

    
  };