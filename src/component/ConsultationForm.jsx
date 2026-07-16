import { useState } from "react";

export default function ConsultationForm() {
  // --- CONTACT FORM STATES ---
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    serviceType: "Designing",
    projectType: "Residential Interior",
    floorPlan: "2 BHK Interior Design",
    projectAddress: "",
    requirements: "",
    agreeToTerms: false,
  });

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // --- WHATSAPP TRANSMISSION HANDLER ---
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the privacy policy & terms.");
      return;
    }

    const myWhatsAppNumber = "919910889575";

    // Layout formatting for WhatsApp message window
    let messageText = `*✨ LUXURY CONSULTATION REQUEST ✨*\n\n`;
    messageText += `👤 *Client Name:* ${formData.fullName}\n`;
    messageText += `📞 *Mobile Number:* ${formData.mobileNumber}\n`;
    messageText += `📧 *Email Address:* ${formData.emailAddress}\n`;
    messageText += `🛠️ *Service Needed:* ${formData.serviceType}\n`;
    messageText += `🏢 *Project Category:* ${formData.projectType}\n`;
    messageText += `📐 *Floor Layout Plan:* ${formData.floorPlan}\n`;
    messageText += `📍 *Site Address:* ${formData.projectAddress || "Not Mentioned"}\n`;
    messageText += `📝 *Requirements:* ${formData.requirements || "None"}\n\n`;

    const encryptedMessage = encodeURIComponent(messageText);
    const whatsappDeepLink = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${encryptedMessage}`;

    window.open(whatsappDeepLink, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-[#e6dfd3]/70 rounded-xl p-6 md:p-10 shadow-sm font-sans my-8">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-600 block mb-2">
        Instant Connect Desk
      </span>
      <h3 className="text-xl md:text-2xl font-serif text-[#2c221e] mb-2">
        Send Your Requirements Via WhatsApp
      </h3>
      <p className="text-xs text-[#7c695e] font-light mb-8">
        Fill the form layout parameters below to trigger a dynamic customized project data broadcast directly to our executive support line.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 text-left">
        {/* Full Name */}
        <div>
          <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
          />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Mobile Number *</label>
            <input
              type="tel"
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Email Address *</label>
            <input
              type="email"
              required
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
            />
          </div>
        </div>

        {/* Project Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Service Type *</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
            >
              <option>Designing</option>
              <option>Turnkey Execution</option>
              <option>Consultation Only</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Project Type *</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
            >
              <option>Residential Interior</option>
              <option>Commercial Space</option>
              <option>Bespoke Villa</option>
            </select>
          </div>
        </div>

        {/* Floor Plan Select */}
        <div>
          <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Choose Floor Plan *</label>
          <select
            name="floorPlan"
            value={formData.floorPlan}
            onChange={handleInputChange}
            className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
          >
            <option>1 BHK / Studio Apartment</option>
            <option>2 BHK Interior Design</option>
            <option>3 BHK Interior Design</option>
            <option>4 BHK / Duplex</option>
          </select>
        </div>

        {/* Site Address */}
        <div>
          <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Project Site Address</label>
          <input
            type="text"
            name="projectAddress"
            value={formData.projectAddress}
            onChange={handleInputChange}
            placeholder="Write site address"
            className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">Brief Requirements</label>
          <textarea
            rows={4}
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            placeholder="Tell us more about your design expectations"
            className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 resize-none font-light"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-2 pt-1">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="mt-0.5 accent-stone-800 cursor-pointer"
          />
          <label htmlFor="agreeToTerms" className="text-[11px] text-[#7c695e] font-light cursor-pointer select-none">
            I agree to send these details via WhatsApp for instant processing.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3d2f26] hover:bg-emerald-800 text-white tracking-[0.2em] font-medium p-4 uppercase text-[11px] transition-all duration-300 rounded-md shadow cursor-pointer active:scale-[0.99]"
        >
          Send Request Via WhatsApp
        </button>
      </form>
    </div>
  );
}