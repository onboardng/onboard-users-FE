import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import carouselImage from "../../assets/Image Card.svg";
import useUploadImage from "../../hooks/useUploadImage";
import { useCreateApplicationMutation, useGetACourseQuery } from "../../redux/services";
import { ApplicationSchema, initialApplicationValues } from "../../schemas/AuthSchema";
import { countryCodes } from "../../utils/selectOptions";
import Button from "../Button/Button";
import Icon from "../Icons";
import InputBox from "../InputBox";
import FileBox from "../InputBox/FileBox";
import InputSelect from "../InputSelect";
import PageLoader from "../Loader/PageLoader";

const ApplySchoolCom = () => {
  const { handleClick, onChange, imageRef, image } = useUploadImage();
  const [apply, { data, isLoading, isSuccess, isError, error }] = useCreateApplicationMutation();
  const { id } = useParams();
  const [phoneCode, setPhoneCode] = useState("");
  const { data: Course, isLoading: loading } = useGetACourseQuery(id as string);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleBlur, touched, errors, setFieldValue } = useFormik({
    initialValues: initialApplicationValues,
    validationSchema: ApplicationSchema,
    onSubmit: (values) => {
      apply({
        ...values,
        id: 1,
        classId: Course?.data?.available_diet[0].id,
        result: image?.file,
        phone_number: phoneCode.trim() + values?.phone_number,
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Application successful");
      navigate("/schools/success");
    }
    if (isError && error && "status" in error) {
      toast.error(error?.data?.message);
    }
  }, [data, isLoading, isSuccess, isError, error, navigate]);

  return (
    <div className="mx-4 md:mx-12 flex flex-col md:flex-row py-5 ">
      {loading && <PageLoader />}
      <div className="md:w-[70%] bg-white rounded-[20px]">
        <div className="md:px-10 px-5">
          <div className="flex items-center border-dashed border-b-2 border-[#DADAE7] md:py-5 py-2.5">
            <img src={carouselImage} className="w-[50px] h-[50px] rounded-[6px] " alt="Apply" />
            <p className="px-3 font-medium text-[14px] leading-[22.4px] md:font-bold md:text-[16px] md:leading-[25.6px]">
              BSC. in Marketing <span className="md:font-medium">at</span> University of Lagos
            </p>
          </div>
          <form onSubmit={handleSubmit} className="py-2.5 md:py-6">
            <h5 className="font-medium text-[16px] leading-[25.6px] md:text-[20px] md:leading-[32px]">Tell us a little about you</h5>
            <div className="py-5">
              <div className="flex xl:flex-row flex-col gap-5 w-full">
                <InputBox
                  placeholder="Name here"
                  label="First Name"
                  label2="*"
                  isRounded
                  classname="md:w-full"
                  fullWidth
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  error={errors.first_name}
                  touched={touched.first_name}
                />
                <InputBox
                  placeholder="Name here"
                  label="Last Name"
                  label2="*"
                  isRounded
                  classname="md:w-full"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="last_name"
                  value={values.last_name}
                  error={errors.last_name}
                  touched={touched.last_name}
                />
              </div>
              <div className="w-full mt-[18px]">
                <div className="py-2 flex w-full xl:w-full md:w-[408px]">
                  <div className="mr-[10px] w-[15%]">
                    <InputSelect options={countryCodes} value="+234" name="countryCode" handleChange={(value: any) => setPhoneCode(value)} />
                  </div>
                  <div className="w-full">
                    <InputBox
                      placeholder="Phone number here"
                      whole={true}
                      isRounded
                      name="phone_number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone_number}
                      error={errors.phone_number}
                      touched={touched.phone_number}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mt-[18px]">
                  <span className="checkbox">
                    <input type="checkbox" className="h-[24px] w-[24px] border-[1px] border-[#DADAE7] rounded-[6px] cursor-pointer" />
                  </span>
                  <p className="font-medium text-[14px] leading-[22.4px] px-3">
                    Receive text alerts about this trip. Message and data rates may apply.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[14px] leading-[22.4px] text-[#8B8BA4] py-4">
                    Please enter the email address where you would like to receive your confirmation.
                  </p>

                  <div className="py-3">
                    <InputBox
                      iconId="green-mail-icon"
                      height={24}
                      width={24}
                      placeholder="Email here"
                      whole={true}
                      label="Email Address"
                      label2="*"
                      isRounded
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={values.email}
                      error={errors.email}
                      touched={touched.email}
                    />
                  </div>
                  <label className="py-3" htmlFor="uploadResult" onClick={handleClick}>
                    <FileBox
                      iconId="upload-icon"
                      height={24}
                      width={24}
                      placeholder="Click here to upload or drag files here"
                      whole={true}
                      label="Upload School Result"
                      label2="*"
                      isRounded
                      onBlur={handleBlur}
                      name="result"
                      value={values.result}
                      error={errors.result}
                      touched={touched.result}
                    />
                  </label>
                  <input
                    id="uploadResult"
                    type="file"
                    accept="image/*, application/*"
                    className="overflow-hidden hidden"
                    ref={imageRef}
                    onChange={(e) => onChange(e, null, setFieldValue, "result")}
                  />
                  <div className="py-3 flex justify-end tab:hidden">
                    <Button
                      loader={isLoading}
                      className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] md:w-auto"
                    >
                      <p className="text-center">Proceed</p>
                      <Icon width={24} height={24} id="arrow-right-icon" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-10 flex justify-end md:hidden">
        <button
          onClick={() => navigate("/schools/success")}
          className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] md:w-auto"
        >
          <p className="text-center">Proceed</p>
          <Icon width={24} height={24} id="arrow-right-icon" />
        </button>
      </div>
      <div className="md:w-[30%] tab:hidden pl-5">
        <div className="bg-white rounded-[10px] px-5 py-10">
          <h5 className="md:text-[20px] md:leading-[32px]">John Doe</h5>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">School</h5>
            <p className="md:text-[20px] md:leading-[32px] capitalize">{Course?.data?.university_name}</p>
          </div>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">Course</h5>
            <p className="md:text-[20px] md:leading-[32px] capitalize">{Course?.data?.name}</p>
          </div>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">Admission closes on</h5>
            <p className="md:text-[20px] md:leading-[32px]">Jan 1, 2023</p>
          </div>
        </div>
        <div className="bg-white rounded-[10px] px-5 my-10 py-10">
          <h5 className="md:text-[20px] md:leading-[32px]">Pricing</h5>
          <div className="flex justify-between border-dashed border-b-[1px] border-[#DADAE7] py-5">
            <p className="md:text-[16px] md:leading-[25.6px]">1 Student</p>
            <p className="md:text-[16px] md:leading-[25.6px]">₦10,000</p>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="md:text-[16px] md:leading-[25.6px]">Total</p>
            <p className="md:text-[20px] md:leading-[32px] font-semibold">₦10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySchoolCom;
