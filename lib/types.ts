import z from "zod";

// Agency Sign in
export const AgencySignUpSchema= z.object({
    country:z.string().min(1,"please insert country name"),
    iso:z.string().min(1,"Please insert ISO number"),
    contractID:z.string().min(8, "Contract Id must contain 8 digits"),
    password:z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword:z.string().min(6, "Confirm Password must be at least 6 characters"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type AgencySignUpSchemaType = z.infer<typeof AgencySignUpSchema>;



// Company Sign up
export const CompanySignUpSchema= z.object({
    companyName:z.string().min(1,"Please enter your company name"),
    country:z.string().min(1,"please enter your country"),
    companyAddress:z.string().min(1,"Please enter your company address"),
    companyEmail:z.string().min(1,"Please enter your company email"),
    companyWebsite:z.string().min(1,"Please enter your company website"),
    companyIndustry:z.string().min(1,"Please enter your company industry"),
    password:z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword:z.string().min(6, "Confirm Password must be at least 6 characters"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

 export type CompanySignUpType = z.infer<typeof CompanySignUpSchema>


//   Citizen Sign up
 export const CitizenSignUpSchema = z.object({
    nationalID: z.string().min(8,  "ID number should be 8 charcters" ),
    fullName: z.string().min(1,  "Please enter your full name"),
    address: z.string().min(1,"Please enter your address" ),
    phone: z.string().min(10, "Phone Number should be atleast 10 characters"),
    email: z.string().email({ message: "Please enter a valid email" }),
    kra: z.string().min(11, "KRA should be 11 characters"),
    password: z.string().min(6,"Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  }).refine(data=>data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CitizenSignUpSchemaType = z.infer<typeof CitizenSignUpSchema>;


//login schemas
// 
// 


// Citizen Login
export const CizitenSigninSchema= z.object({
  nationalID:z.string().min(8, "National ID contain 8 digits").max(8,"National ID contain 8 digits"),
  password:z.string().min(6,"Password Should be atleast 6 characters"),
})

export type CitizemSigninSchemaType = z.infer<typeof CizitenSigninSchema>;

// Agency Login
export const AgencyLoginSchema = z.object({
  countryName: z.string().min(1, "Country name is required"),
  password: z.string().min(6, "Password should be atleast 6 characters"),
});

export type AgencyLoginSchemaType = z.infer<typeof AgencyLoginSchema>;

// Company Login
export const CompanyLoginSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  password: z.string().min(1, "Password is required"),
});

export type CompanyLoginSchemaType = z.infer<typeof CompanyLoginSchema>;



// Job Application 
export const AplicationSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be atleast 10 characters"),
  nationalID: z.string().min(8, "National ID should be atleast 8 characters"),
  kra: z.string().min(11, "KRA PIN  should be atleast 11 characters"),
  abstractFile: z.any().nullable().optional(),
  curriculumVitae: z.any().nullable().optional(),
});
export type AplicationSchemaType = z.infer<typeof AplicationSchema>;