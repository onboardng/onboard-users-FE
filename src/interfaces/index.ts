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
    id: string
    name: string
    description: string
    UniversityId: string
    ProgramId: string
}