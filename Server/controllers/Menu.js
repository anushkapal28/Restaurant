const MenuItem = require("../models/Menu");

exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json({
            success: true,
            data: menuItems,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

exports.createMenuItem = async (req, res) => {
    const { name, description, price, category, imageUrl } = req.body;

    try {
        const menuItem = new MenuItem({ name, description, price, category, imageUrl });
        await menuItem.save();

        res.status(201).json({
            success: true,
            message: "Menu item created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
