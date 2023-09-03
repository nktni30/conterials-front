
import React, { useState } from 'react';
import { useFormik } from "formik";
import { CategoriesUploadSchema } from '../schemas/AdminSchemas';
import Swal from 'sweetalert2';

const initialValues = {
      title: "",
      categoryImage: "",
}

const CategoriesUpload = () => {

      const [image, setImage] = useState("");

      function convertTobase64(e) {
            console.log(e);
            var imgreader = new FileReader();
            imgreader.readAsDataURL(e.target.files[0]);
            imgreader.onload = () => {
                  console.log(imgreader.result);
                  setImage(imgreader.result)
            };
            imgreader.onerror = error => {
                  console.log("Error: ", error);
            }
      }

      const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({


            initialValues: initialValues,
            validationSchema: CategoriesUploadSchema,
            onSubmit: async (values, action,) => {
                  const { title, categoryImage } = values;

                  const res = await fetch("/api/category", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                              title, categoryImage
                        })
                  });

                  const data = await res.json();
                  if (res.status === 422 || !data) {
                        Swal.fire({
                              title: 'Not Added',
                              text: 'This Category is Already Present',
                              position: 'center',
                              icon: 'error',
                              timer: 3000,
                              timerProgressBar: true,
                        })
                        console.log("Message not Sent");
                  } else {
                        Swal.fire({
                              title: 'Messagae Sent Succesfully',
                              position: 'center',
                              icon: 'success',
                              timer: 3000,
                              timerProgressBar: true,
                              confirmButtonColor: '#FDAE38'
                        })
                        console.log("Category Added Succesfully");

                  }

                  action.resetForm();

            },
      });
      console.log(
            errors
      );

      return (


            <>
                  <div className='container mt-5'>
                        <div className='row d-flex justify-content-center align-items-center'>
                              <div className='col-6'>
                                    <form method='POST' id="categories-form">
                                          <div className='mb-3'>
                                                <label>Title of the Categories</label>
                                                <br />
                                                <input
                                                      className='form-control'
                                                      type='text'
                                                      value={values.title}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      name='title'
                                                      id="CatTitle"
                                                      required />
                                                {errors.title && touched.title ? (<span className='text-warning'>{errors.title}</span>) : null}
                                          </div>
                                          <div className='mb-3'>
                                                <label>Select image</label>
                                                <br />
                                                <input
                                                      type='file'
                                                      accept='image/*'
                                                      onChange={convertTobase64}
                                                      onBlur={handleBlur}
                                                      name='categoryImage'
                                                      id='categorymage'
                                                />
                                                {errors.categoryImage && touched.categoryImage ? (<span className='text-warning'>{errors.categoryImage}</span>) : null}
                                                {image === "" || image === null ? "" : <img className='img-preview' src={image} alt='upload-preview' />}

                                          </div>
                                          <div className='mb-3 d-flex justify-content-end'>

                                                <button onClick={handleSubmit} className='btn btn-primary' type='submit'>Submit</button>
                                          </div>
                                    </form>

                              </div>
                        </div>
                  </div>
            </>
      )
}

export default CategoriesUpload;