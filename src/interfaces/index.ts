
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
    application_closing?: string | Date
    application_opening?: string | Date
    description?: string
    id?: string
    name?: string
    program_name?: string
    school_name: string
}

export interface PaginationProps {
    currentPage: number
    hasNextPage?: boolean
    hasPrevPage?: boolean
    pageCount: number
    perPage: number
    totalDocs: number
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

interface CourseData {
    count: number
    rows: Array<NewCourse>
}
interface SchoolData {
    count: number
    rows: Array<School>
}

export interface SchoolResponse extends PaginationProps {
    data: SchoolData
}

export interface CourseResponse extends PaginationProps {
    data: CourseData
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