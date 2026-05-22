import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';

const Form = () => {

     const [status, setStatus] = useState("idle");

     const [otpStep, setOtpStep] = useState(false);

     const [loading, setLoading] = useState(false);

     const [resendTimer, setResendTimer] = useState(0);

     const [successMessage, setSuccessMessage] = useState("");

     const [errors, setErrors] = useState({});

     const timerRef = useRef(null);

     const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          otp: ""
     });

     useEffect(() => {

          if (!successMessage) return;

          const timer = setTimeout(() => {
               setSuccessMessage("");
          }, 5000);

          return () => clearTimeout(timer);

     }, [successMessage]);

     useEffect(() => {

          return () => {
               if (timerRef.current) {
                    clearInterval(timerRef.current);
               }
          };

     }, []);

     const handleChange = (e) => {

          const { name, value } = e.target;

          if (name === "phone") {

               const onlyNumbers =
                    value.replace(/\D/g, "").slice(0, 10);

               setFormData((prev) => ({
                    ...prev,
                    phone: onlyNumbers
               }));

          } else if (name === "otp") {

               const otpDigits =
                    value.replace(/\D/g, "").slice(0, 6);

               setFormData((prev) => ({
                    ...prev,
                    otp: otpDigits
               }));

          } else {

               setFormData((prev) => ({
                    ...prev,
                    [name]: value
               }));
          }

          if (errors[name]) {
               setErrors((prev) => ({
                    ...prev,
                    [name]: ""
               }));
          }
     };

     const validateForm = () => {

          const newErrors = {};

          if (!formData.fullName.trim()) {
               newErrors.fullName = "Full Name is required";
          }

          if (!/^[0-9]{10}$/.test(formData.phone)) {
               newErrors.phone =
                    "Phone number must be exactly 10 digits";
          }

          if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
               newErrors.email =
                    "Enter a valid email address";
          }

          return newErrors;
     };

     const startResendTimer = () => {

          setResendTimer(60);

          if (timerRef.current) {
               clearInterval(timerRef.current);
          }

          timerRef.current = setInterval(() => {

               setResendTimer((prev) => {

                    if (prev <= 1) {

                         if (timerRef.current) {
                              clearInterval(timerRef.current);
                         }

                         return 0;
                    }

                    return prev - 1;
               });

          }, 1000);
     };

     const handleSendOTP = async (e) => {

          e.preventDefault();

          const validationErrors = validateForm();

          if (Object.keys(validationErrors).length > 0) {

               setErrors(validationErrors);

               return;
          }

          setLoading(true);

          try {

               const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/send-otp`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },
                         body: JSON.stringify({
                              phone: formData.phone,
                              email: formData.email
                         })
                    }
               );

               const result = await response.json();

               if (response.ok) {

                    setOtpStep(true);

                    setErrors({});

                    startResendTimer();

               } else {

                    setErrors({
                         phone:
                              result.error ||
                              "Failed to send OTP"
                    });
               }

          } catch (error) {

               console.log(error);

               setErrors({
                    phone: "Failed to send OTP"
               });

          } finally {

               setLoading(false);
          }
     };

     const handleResendOTP = async () => {

          if (resendTimer > 0) return;

          setLoading(true);

          try {

               const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/send-otp`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },
                         body: JSON.stringify({
                              phone: formData.phone,
                              email: formData.email
                         })
                    }
               );

               const result = await response.json();

               if (response.ok) {

                    setErrors({});

                    startResendTimer();

               } else {

                    setErrors({
                         otp:
                              result.error ||
                              "Failed to resend OTP"
                    });
               }

          } catch (error) {

               console.log(error);

               setErrors({
                    otp: "Failed to resend OTP"
               });

          } finally {

               setLoading(false);
          }
     };

     const handleSubmitWithOTP = async (e) => {

          e.preventDefault();

          if (!formData.otp || formData.otp.length !== 6) {

               setErrors({
                    otp: "Please enter 6-digit OTP"
               });

               return;
          }

          setStatus("loading");

          setLoading(true);

          try {

               const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/submit-booking`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json"
                         },
                         body: JSON.stringify({
                              fullName: formData.fullName,
                              phone: formData.phone,
                              email: formData.email,
                              message: formData.message,
                              otp: formData.otp
                         })
                    }
               );

               const result = await response.json();

               if (response.ok) {

                    setStatus("success");

                    setSuccessMessage(
                         "Booking submitted successfully!"
                    );

                    setFormData({
                         fullName: "",
                         email: "",
                         phone: "",
                         message: "",
                         otp: ""
                    });

                    setOtpStep(false);

                    setErrors({});

                    if (timerRef.current) {
                         clearInterval(timerRef.current);
                    }

                    setTimeout(() => {
                         setStatus("idle");
                    }, 3000);

               } else {

                    setStatus("error");

                    setErrors({
                         otp:
                              result.error ||
                              "Invalid OTP"
                    });
               }

          } catch (error) {

               console.log(error);

               setStatus("error");

               setErrors({
                    otp:
                         "Failed to submit. Please try again."
               });

          } finally {

               setLoading(false);
          }
     };

     return (
          <div className="relative rounded-[34px] bg-linear-to-r from-[#A2A7BE29] to-[#CFD5F229] backdrop-blur-xl border border-white/40 p-6 md:p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

               <h3 className="playfair text-[24px] sm:text-[32px] md:text-[44px] leading-12 md:leading-16 xl:leading-21 tracking-[-2px] font-bold bg-clip-text text-transparent bg-linear-to-r from-light-blue to-dark-blue mb-10">
                    Enquire Here!
               </h3>

               {successMessage && (
                    <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg mb-5">
                         {successMessage}
                    </div>
               )}

               <form
                    onSubmit={
                         otpStep
                              ? handleSubmitWithOTP
                              : handleSendOTP
                    }
                    className="space-y-4"
                    noValidate
               >

                    {!otpStep ? (
                         <>

                              {/* Full Name */}
                              <div>

                                   <label className="block text-[14px] text-[#161616] mb-2">
                                        Full Name
                                   </label>

                                   <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Placeholder"
                                        className={`w-full h-12 rounded-sm border bg-white/24 px-4 text-[15px] outline-none transition-all duration-300 focus:border-[#123DA7] ${errors.fullName
                                                  ? "border-red-400"
                                                  : "border-[#D9DCE3]"
                                             }`}
                                   />

                                   {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">
                                             {errors.fullName}
                                        </p>
                                   )}

                              </div>

                              {/* Email */}
                              <div>

                                   <label className="block text-[14px] text-[#161616] mb-2">
                                        Email Id
                                   </label>

                                   <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Placeholder"
                                        className={`w-full h-12 rounded-sm border bg-white/24 px-4 text-[15px] outline-none transition-all duration-300 focus:border-[#123DA7] ${errors.email
                                                  ? "border-red-400"
                                                  : "border-[#D9DCE3]"
                                             }`}
                                   />

                                   {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                             {errors.email}
                                        </p>
                                   )}

                              </div>

                              {/* Phone */}
                              <div>

                                   <label className="block text-[14px] text-[#161616] mb-2">
                                        Phone Number
                                   </label>

                                   <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Placeholder"
                                        className={`w-full h-12 rounded-sm border bg-white/24 px-4 text-[15px] outline-none transition-all duration-300 focus:border-[#123DA7] ${errors.phone
                                                  ? "border-red-400"
                                                  : "border-[#D9DCE3]"
                                             }`}
                                   />

                                   {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">
                                             {errors.phone}
                                        </p>
                                   )}

                              </div>

                              {/* Message */}
                              <div>

                                   <label className="block text-[14px] text-[#161616] mb-2">
                                        Description (optional)
                                   </label>

                                   <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Placeholder"
                                        className="w-full rounded-sm border border-[#D9DCE3] bg-white/24 px-4 py-3 text-[15px] outline-none resize-none transition-all duration-300 focus:border-[#123DA7]"
                                   />

                              </div>

                              {/* Button */}
                              <div className="flex items-center justify-center mt-5">

                                   <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                   >

                                        <Button
                                             widthHeight="w-72.25 lg:w-[460px] h-12 lg:h-[56px]"
                                             BG="bg-linear-to-r from-light-blue to-dark-blue"
                                             textColor="text-white"
                                             text={
                                                  loading
                                                       ? "Sending OTP..."
                                                       : "Submit"
                                             }
                                        />

                                   </button>

                              </div>

                         </>
                    ) : (
                         <>

                              {/* OTP Info */}
                              <div className="bg-blue-50 border border-blue-800 rounded-lg p-4">

                                   <p className="text-sm text-black font-medium">
                                        OTP sent to{" "}
                                        <span className="text-dark-blue">
                                             {formData.email}
                                        </span>
                                   </p>

                              </div>

                              {/* OTP */}
                              <div>

                                   <label className="block text-[14px] text-[#161616] mb-2">
                                        Enter OTP
                                   </label>

                                   <input
                                        type="text"
                                        name="otp"
                                        value={formData.otp}
                                        onChange={handleChange}
                                        placeholder="Enter 6-digit OTP"
                                        maxLength={6}
                                        className={`w-full h-12 rounded-sm border bg-white/24 px-4 text-[15px] outline-none transition-all duration-300 focus:border-[#123DA7] ${errors.otp
                                                  ? "border-red-400"
                                                  : "border-[#D9DCE3]"
                                             }`}
                                   />

                                   {errors.otp && (
                                        <p className="text-red-500 text-xs mt-1">
                                             {errors.otp}
                                        </p>
                                   )}

                              </div>

                              {/* OTP Actions */}
                              <div className="flex items-center justify-between gap-4">

                                   <button
                                        type="button"
                                        onClick={handleResendOTP}
                                        disabled={
                                             resendTimer > 0 ||
                                             loading
                                        }
                                        className={`text-sm ${resendTimer > 0
                                                  ? "text-gray-400 cursor-not-allowed"
                                                  : "text-[#123DA7] cursor-pointer"
                                             }`}
                                   >
                                        {resendTimer > 0
                                             ? `Resend OTP in ${resendTimer}s`
                                             : "Resend OTP"}
                                   </button>

                                   <button
                                        type="button"
                                        onClick={() => {
                                             setOtpStep(false);

                                             setFormData((prev) => ({
                                                  ...prev,
                                                  otp: ""
                                             }));

                                             setErrors({});

                                             setStatus("idle");

                                             if (timerRef.current) {
                                                  clearInterval(timerRef.current);
                                             }
                                        }}
                                        className="text-sm text-[#123DA7] cursor-pointer"
                                   >
                                        Edit Details
                                   </button>

                              </div>

                              {/* Submit */}
                              <div className="flex items-center justify-center mt-5">

                                   <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                   >

                                        <Button
                                             widthHeight="w-72.25 lg:w-[460px] h-12 lg:h-[56px]"
                                             BG="bg-linear-to-r from-light-blue to-dark-blue"
                                             textColor="text-white"
                                             text={
                                                  loading
                                                       ? "Verifying..."
                                                       : "Verify & Submit"
                                             }
                                        />

                                   </button>

                              </div>

                         </>
                    )}

               </form>

          </div>
     );
};

export default Form;