import * as Yup from "yup";

export const SearchSchema = Yup.object().shape({
    school_name: Yup.string().when(['country_name', 'course_name', 'program_name'], {
        is: (country_name: string, course_name: string, program_name: string) => !country_name && !course_name && !program_name,
        then: Yup.string().required()
    }),
    country_name: Yup.string().when(['school_name', 'course_name', 'program_name'], {
        is: (school_name: string, course_name: string, program_name: string) => !school_name && !course_name && !program_name,
        then: Yup.string().required()
    }),
    course_name: Yup.string().when(['school_name', 'country_name', 'program_name'], {
        is: (school_name: string, country_name: string, program_name: string) => !school_name && !country_name && !program_name,
        then: Yup.string().required()
    }),
    program_name: Yup.string().when(['school_name', 'country_name', 'course_name'], {
        is: (school_name: string, country_name: string, course_name: string) => !school_name && !country_name && !course_name,
        then: Yup.string().required()
    }),
}, [['country_name', 'course_name'], ['country_name', 'program_name'], ['country_name', 'school_name'], ['school_name', 'course_name'], ['school_name', 'program_name'], ["program_name","course_name"]])