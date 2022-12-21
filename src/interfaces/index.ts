
export interface User {
    accessTokens: string
    avatar?: string | null
    created_at?: string | Date
    deleted?: boolean
    email: string
    first_name: string
    id: string
    isBlocked?: boolean
    isVerified?: boolean
    last_name: string
    method?: string
    phone_number: string | null
    profile_picture?: string | null
    updated_at?: string | Date
}

export interface CardProps {
    id: string
    name?: string
    description?: string
    added_by?: string
    deleted?: boolean
    program_name?: string
    school_name: string
    faculty_name?: string
    tuition?: number
    total_fees_breakdown?: any
    service_charge?: number
    country: string
    created_at?: string
    updated_at?: string
    UniversityId?: string
    ProgramId?: string
    FacultyId?: string
    width?: string | number
}

export interface UniversityProps {
    added_by?: string
    address: string
    country: string
    created_at?: string | Date
    deleted?: boolean
    description: string
    id: string
    name: string
    pictures: Array<string>
    ratings?: number
    total_admission: number
    updated_at?: string | Date
}

export interface Program {
    UniversityId: string
    added_b: string
    created_at: string | Date
    delete: boolean
    description: string
    duration: number
    id: string
    name: string
    university_name: string 
    updated_at: string | Date
}

export interface UniversityResponse {
    university: UniversityProps
    available_programs: Array<Program>
}

export interface Course {
    ProgramId: string
    UniversityId: string
    application_closing?: string | Date
    application_opening?: string | Date
    available_diet?: AvailableDiet
    currency: string
    description: string
    duration?: number
    id: string
    name: string
    price_in_naira: number
    program: string
    required_documents?: RequiredDocuments
    school_name: string
    service_charge: number
    tuition: number
    university_name: string
}

export interface PaginationProps {
    currentPage: number
    hasNextPage?: boolean
    hasPrevPage?: boolean
    pageCount: number
    perPage: number
    no_of_schools: number
    totalDocs: number
    totalPages: number
}

export interface School {
    country: string
    created_at: string
    description: string
    id: string
    name: string
    pictures?: Array<string>
    ratings: number
    updated_at: string | Date
}

export interface SchoolResponse extends PaginationProps {
    foundSchools: Array<School>
}

export interface NewCourse {
    FacultyId: string
    ProgramId: string
    UniversityId: string
    added_by: string
    country: string
    created_at: string | Date
    deleted: boolean
    description: string
    faculty_name: string
    id: string
    name: string
    program_name: string
    school_name: string
    service_charge: number
    total_fees_breakdown: any
    tuition: number
    update_at: string | Date
}

export interface AvailableDiet {
    AdmissionId: string
    CourseId: string
    added_by: string
    application_closing: string | Date
    application_fees: any
    application_opening: string
    class_diet: string
    class_year: number
    course_name: string
    course_tuition: number
    created_at: string
    id: string
    status_of_admission: string
    total_applicants: number
    updated_at: string | Date
}

export interface Courses {
    ProgramId: string
    UniversityId: string
    application_closing: string
    application_opening: string
    available_diet: AvailableDiet
    conversion_rate: string
    country: string
    created_at: string | Date
    description: string
    duration?: number
    id: string
    name: string
    price_in_naira: number
    program: string
    required_documents?: RequiredDocuments
    service_charge: any
    total_applicants: number
    tuition: number
    university_name: string
    updated_at: string | Date
}

interface RequiredDocuments {
    undergraduate?: Array<string>
    graduate?: Array<string>
    postgraduate?: Array<string>
}

export interface State {
    name: string
    state_code: string
}

export interface Country {
    name: string
    ios3: string
    states: Array<State>
}

export interface CountryList {
    data: Array<Country>
}

export interface Payment {
    application_id: string
    email: string
    phone_number: string
    service_charge: number
    onClose: () => void
}