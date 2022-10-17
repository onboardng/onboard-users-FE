import InputBox from "../../components/InputBox";
import AuthScreen from "../../components/Authentication/AuthScreen";
import useUploadImage from "../../hooks/useUploadImage";

const BasicDetails = () => {
  const { handleClick, onChange, imageRef, image } = useUploadImage();

  return (
    <AuthScreen title="Welcome 👋🏽" subtitle="Let us know a little about you">
      <form action="" className="mt-5">
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
          <InputBox placeholder="Name here" whole label="First Name" />
        </div>
        <div className="mb-5">
          <InputBox placeholder="Name here" whole label="Last Name" />
        </div>
        <div className="mb-5">
          <InputBox placeholder="Lagos, Nigeria" whole label="Location" width={16} height={16} iconId2="location-black-icon" />
        </div>
        <div className="flex justify-end mb-4">
          <div className="flex items-center justify-center  text-white bg-green py-3 gap-3 px-5 text-sm cursor-pointer rounded hover:border-2 hover:border-green hover:bg-transparent hover:text-green">
            <p className="text-sm font-medium">Continue</p>
          </div>
        </div>
      </form>
    </AuthScreen>
  );
};

export default BasicDetails;
