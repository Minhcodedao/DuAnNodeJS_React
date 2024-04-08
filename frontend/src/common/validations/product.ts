import Joi from "joi";

export const ProductJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Tên sản phẩm không được để trống',
        'any.required': 'Tên sản phẩm là bắt buộc'
    }),
    price: Joi.number().required().messages({
        'number.base': 'Giá sản phẩm phải là một số',
        'any.required': 'Giá sản phẩm là bắt buộc'
    }),
    category: Joi.string().messages({
        'string.base': 'Danh mục sản phẩm phải là một chuỗi'
    }),
    gallery: Joi.array().items(Joi.string()).messages({
        'array.base': 'Thư viện ảnh phải là một mảng'
    }),
    image: Joi.string().messages({
        'string.base': 'Hình ảnh sản phẩm phải là một chuỗi'
    }),
    description: Joi.string().messages({
        'string.base': 'Mô tả sản phẩm phải là một chuỗi'
    }),
    discount: Joi.number().messages({
        'number.base': 'Giảm giá phải là một số'
    }),
    featured: Joi.boolean().messages({
        'boolean.base': 'Nổi bật phải là giá trị boolean'
    }),
    countInStock: Joi.number().messages({
        'number.base': 'Số lượng trong kho phải là một số'
    }),
});