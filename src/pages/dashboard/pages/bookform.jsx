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
      
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
      {isSubmitting ? (
        <PageLoader />
      ) : (
        <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl p-8'>
          <h1 className='font-bold text-4xl text-center text-blue-600 mb-12' onClick={() => navigate("/")}>TaskHub</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>

            <div>
              <label className='block font-semibold text-lg mb-2'>Enter Your Fullname</label>
              <input 
                type="text" 
                className='h-12 w-full rounded-lg px-4 border border-gray-300 focus:outline-none focus:border-blue-500' 
                placeholder='Fullname'
                {...register("fullname")} 
              />
            </div>

            <div>
              <label className='block font-semibold text-lg mb-2'>Enter Your Email Address</label>
              <input 
                type="email" 
                className='h-12 w-full rounded-lg px-4 border border-gray-300 focus:outline-none focus:border-blue-500' 
                placeholder='Email'
                {...register("email")} 
              />
            </div>

            <div>
              <label className='block font-semibold text-lg mb-2'>Enter Your Telephone Number</label>
              <input 
                type="text" 
                className='h-12 w-full rounded-lg px-4 border border-gray-300 focus:outline-none focus:border-blue-500' 
                placeholder='Telephone Number'
                {...register("telephone")} 
              />
            </div>

            <div>
              <label className='block font-semibold text-lg mb-2'>Your Task Location</label>
              <input 
                type="text" 
                className='h-12 w-full rounded-lg px-4 border border-gray-300 focus:outline-none focus:border-blue-500' 
                placeholder='Street address'
                {...register("location")} 
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div>
              <h2 className='font-semibold text-lg mb-2'>Task Options</h2>
              <div className='space-y-2'>
                <div>
                  <input 
                    type="checkbox" 
                    {...register("taskOptions")} 
                    value="Small" 
                    className='mr-2'
                  />
                  <label> Small</label>
                </div>
                <div>
                  <input 
                    type="checkbox" 
                    {...register("taskOptions")} 
                    value="Medium" 
                    className='mr-2'
                  />
                  <label> Medium</label>
                </div>
                <div>
                  <input 
                    type="checkbox" 
                    {...register("taskOptions")} 
                    value="Large" 
                    className='mr-2'
                  />
                  <label> Large</label>
                </div>
              </div>
            </div>

            <div>
              <label className='block font-semibold text-lg mb-2'>Task Details</label>
              <textarea 
                className='w-full h-32 rounded-lg px-4 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none' 
                placeholder='Provide a detailed summary of what you need for your Tasker.'
                {...register("details")} 
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block font-semibold text-lg mb-2'>Task Date</label>
                <input 
                  type="date" 
                  className='border border-gray-300 h-12 w-full rounded-lg px-4 focus:outline-none focus:border-blue-500'
                  {...register("taskDate")} 
                />
              </div>
              <div>
                <label className='block font-semibold text-lg mb-2'>Start Time</label>
                <input 
                  type="time" 
                  className='border border-gray-300 h-12 w-full rounded-lg px-4 focus:outline-none focus:border-blue-500'
                  {...register("startTime")} 
                />
              </div>
            </div>

            <div className='text-center'>
              <button 
                type="submit" 
                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full w-full transition duration-300'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookForm;
