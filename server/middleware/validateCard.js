const validateCard = (req, res, next) => {
    const { title, description } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    
    if (typeof title !== 'string' || typeof description !== 'string') {
      return res.status(400).json({ message: 'Title and description must be strings' });
    }
    
    next();
  };
  
  module.exports = validateCard;