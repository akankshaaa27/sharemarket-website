import { RequestHandler } from "express";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
  meetingType: string;
  consent: boolean;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.mobile || !formData.service) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Log the submission (in production, this would send an email)
    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      ...formData,
    });

    // Return success
    return res.json({
      success: true,
      message: "Your consultation request has been received. We'll contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Failed to process your request" });
  }
};
