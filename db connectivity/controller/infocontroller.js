const Info = require('../schema/infoschema');

// Create a new info
exports.createInfo = async (req, res) => {
  try {
    console.log(req.body);
    const info = new Info({
      ...req.body
    });
    console.log(info)
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all infos
exports.getInfos = async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get an info by ID
exports.getInfoById = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) {
      return res.status(404).json({ message: 'Info not found' });
    }
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an info by ID
exports.updateInfo = async (req, res) => {
  try {
    const info = await Info.findOneAndUpdate({email:req.params.email}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!info) {
      return res.status(404).json({ message: 'Info not found' });
    }
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an info by ID
exports.deleteInfo = async (req, res) => {
  try {
    const info = await Info.findByIdAndDelete(req.params.id);
    if (!info) {
      return res.status(404).json({ message: 'Info not found' });
    }
    res.json({ message: 'Info deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
