import { useNavigate } from 'react-router-dom';
import { apiBooking } from '../../../services/bookform';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PageLoader from '../../../components/pageloader';
import { toast } from 'react-toastify';

const BookForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      location: data.location,
      taskOptions: data.taskOptions,
      taskDate: data.taskDate,
      startTime: data.startTime,
    };

    try {
      const res = await apiBooking(payload);
      console.log(res.data);
      toast.success(res.data.message);
      navigate("/taskerdash");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gray-400'>
      {isSubmitting ? <PageLoader /> : (
        <div className='py-20'>
          <h1 className='font-bold text-3xl ml-11 mb-11 text-center' onClick={() => navigate("/")}>TaskerHub</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='bg-white py-16 rounded-lg mr-11 ml-11 space-y-7 px-6'>
              <h3 className='font-semibold text-2xl px-6'>Your Task Location</h3>
              <input 
                type="text" 
                className='h-16 w-[900px] rounded-lg px-8 border border-black' 
                placeholder='Street address'
                {...register("location")} 
              />
              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
            </div>

            <div className='py-10'>
              <div className='bg-white py-16 rounded-lg mr-11 ml-11 space-y-5 px-8'>
                <h2 className='font-semibold text-2xl'>Task Options</h2>
                <h3 className='text-lg'>How big is your task?</h3>
                <input 
                  type="checkbox" 
                  {...register("taskOptions")} 
                  value="Small" 
                />
                <label> Small</label> <br />
                <input 
                  type="checkbox" 
                  {...register("taskOptions")} 
                  value="Medium" 
                />
                <label> Medium</label> <br />
                <input 
                  type="checkbox" 
                  {...register("taskOptions")} 
                  value="Large" 
                />
                <label> Large</label>
              </div>

              <div className='py-10'>
                <div className='bg-white py-16 rounded-lg mr-11 ml-11 space-y-5 px-8'>
                  <h2 className='font-semibold text-2xl'>Tell us the details of your task</h2>
                  <p className='text-lg'>
                    Start the conversation and tell your Tasker what you need done. 
                    This helps us show you only qualified and available Taskers for the job.
                  </p>
                  <input 
                    type="text" 
                    className='h-32 w-[900px] rounded-lg px-8 border border-black' 
                    placeholder='Provide a detailed summary of what you need for your Tasker.'
                    {...register("details")} 
                  />
                </div>
              </div>

              <div className='py-10'>
                <div className='bg-white py-16 rounded-lg mr-11 ml-11 space-y-5 px-8'>
                  <h2 className='font-semibold text-2xl'>Choose your task date and start time:</h2>
                  <input 
                    type="date" 
                    className='border border-black h-16 w-[400px] rounded-full flex items-center px-24'
                    {...register("taskDate")} 
                  /> <br />
                  <input 
                    type="time" 
                    className='border border-black h-16 w-[400px] rounded-full flex items-center px-24'
                    {...register("startTime")} 
                  />
                </div>
              </div>

              <div className='px-80'>
                <div className='text-center rounded-full border border-blue-500 h-10 w-96 text-white ml-6 bg-blue-500'>
                  <button type="submit" className='py-2'>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookForm;
