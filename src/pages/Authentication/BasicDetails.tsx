import InputBox from "../../components/InputBox";
import AuthScreen from "../../components/Authentication/AuthScreen";
import useUploadImage from "../../hooks/useUploadImage";
import { useUpdateProfileMutation } from "../../redux/services";
import { useFormik } from "formik";
import { initialUpdateProfileValues, UpdateProfileSchema } from "../../schemas/AuthSchema";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const BasicDetails = () => {
  const { handleClick, onChange, imageRef, image } = useUploadImage();
  const [update, { data, isLoading, isSuccess, isError, error }] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } = useFormik({
    initialValues: initialUpdateProfileValues,
    validationSchema: UpdateProfileSchema,
    onSubmit: (values) => {
      update({ profile_picture: image?.file, full_name: values?.first_name + " " + values?.last_name, location: values?.location });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully");
      navigate("/home-page");
    }
    if (isError && error && "status" in error) {
      toast.error(error?.data?.message);
    }
  }, [data, isLoading, isSuccess, isError, error, navigate]);

  return (
    <AuthScreen title="Welcome 👋🏽" subtitle="Let us know a little about you">
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-start gap-2 mb-5">
          <div className="flex items-center self-start justify-between">
            <img
              src={image.preview ? image.preview : "/svgs/profileHolder.svg"}
              alt=""
              className=" h-[100px] w-[100px] bg-jumbleng-primary-light object-cover rounded-full"
            />
          </div>
          <label htmlFor="imageUpload" onClick={handleClick} className="text-[#8B8BA4] text-[14px] cursor-pointer">
            Tap to upload
          </label>
          <input id="imageUpload" type="file" accept="image/*" className="overflow-hidden hidden" ref={imageRef} onChange={onChange} />
        </div>
        <div className="mb-5">
          <InputBox
            placeholder="Name here"
            whole
            label="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_name}
            error={errors.first_name}
            touched={touched.first_name}
            name="first_name"
          />
        </div>
        <div className="mb-5">
          <InputBox
            placeholder="Name here"
            whole
            label="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last_name}
            error={errors.last_name}
            touched={touched.last_name}
            name="last_name"
          />
        </div>
        <div className="mb-5">
          <InputBox
            placeholder="Lagos, Nigeria"
            whole
            label="Location"
            width={16}
            height={16}
            iconId2="location-black-icon"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
            error={errors.location}
            touched={touched.location}
            name="location"
          />
        </div>
        <div className="flex justify-end mb-4">
          <Button
            loader={isLoading}
            className="flex items-center justify-center  text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green"
          >
            <p className="text-sm font-medium">Continue</p>
          </Button>
        </div>
      </form>
    </AuthScreen>
  );
};

export default BasicDetails;
