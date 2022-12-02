
export interface User {
    accessTokens: string
    avatar?: string | null
    created_at?: string | Date
    deleted?: boolean
    email: string
    full_name: string
    id: string
    isBlocked?: boolean
    isVerified?: boolean
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
    application_closing: string | Date
    application_opening: string | Date
    description: string
    id: string
    name: string
    program_name: string
    school_name: string
}

export interface PaginationProps {
    currentPage: number
    hasNextPage?: boolean
    hasPrevPage?: boolean
    next?: number
    pageCount: number
    perPage: number
    previous?: number
    totalDocs: number
}