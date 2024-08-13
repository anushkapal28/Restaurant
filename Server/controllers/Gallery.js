const GalleryImage = require("../models/Gallery");

exports.uploadImage = async (req, res) => {
    const { title, description } = req.body;

    try {
        const galleryImage = new GalleryImage({
            imageUrl: req.file.path,
            title,
            description,
        });

        await galleryImage.save();

        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

exports.getImages = async (req, res) => {
    try {
        const images = await GalleryImage.find();
        res.status(200).json({
            success: true,
            data: images,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
