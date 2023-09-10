import * as Yup from 'yup';

export const CreateCategorySchema = Yup.object({
      title: Yup.string().min(1).max(50).required("Please enter the title"),
      catImage: Yup.string().required("Please select a image"),
})