import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
    const [data, setData] = useState({
        max_schedule_date: '2023-11-08',
        blacklist_dates: ['2023-11-08'],
        ds160_city: 'BRA',
        consulate_id: 54,
        b64_picture: 'string',
        main_applicant: true,
        traveling_to_apply: true,
        security_question_option: 0,
        security_question_response: 'string',
        application_id: 'string',
        name: {
            surname: 'string',
            given_name: 'string',
            full_name: 'string',
        },
        other_name: {
            surname: 'string',
            given_name: 'string',
            full_name: 'string',
        },
        telecode_name: {
            surname: 'string',
            given_name: 'string',
            full_name: 'string',
        },
        gender: 'M',
        marital_status: 'S',
        spouse: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth: {
                date: '2023-11-08',
                city: 'string',
                state: 'string',
                country: 'AFGH',
            },
            nationality: 'string',
            address_type: 'H',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
        },
        former_spouses: [
            {
                name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
                birth: {
                    date: '2023-11-08',
                    city: 'string',
                    state: 'string',
                    country: 'AFGH',
                },
                nationality_country: 'AFGH',
                marriage_start_date: '2023-11-08',
                marriage_end_date: '2023-11-08',
                end_marriage_reason: 'string',
                end_marriage_country: 'AFGH',
            },
        ],
        deceased_spouse: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth: {
                date: '2023-11-08',
                city: 'string',
                state: 'string',
                country: 'AFGH',
            },
            nationality: 'AFGH',
        },
        birth: {
            date: '2023-11-08',
            city: 'string',
            state: 'string',
            country: 'AFGH',
        },
        nationality_country: 'AFGH',
        other_nationality_country: 'AFGH',
        other_nationality_passport: 'string',
        permanent_resident_other_country: 'AFGH',
        national_identification_number: 'string',
        us_social_security_number: 'string',
        us_taxpayer_number: 'string',
        visa_class: 'B',
        visa_class_specify: 'B1-B2',
        stay: {
            date: '2023-11-08',
            length: 0,
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'AL',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
        },
        entity_paying: {
            entity_type: 'S',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            phone_number: 'string',
            relationship: 'C',
            same_address: true,
            email: 'string',
            org_name: 'string',
            person_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
        },
        escorts: [
            {
                name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
                relationship: 'C',
            },
        ],
        group: 'string',
        us_visits: [
            {
                date: '2023-11-08',
                length_of_stay: 0,
            },
        ],
        old_visa: {
            consulate_id: 54,
            issue_date: '2023-11-08',
            expiration_date: '2023-11-08',
            number: 'string',
            applying_for_same_type: true,
            applying_for_same_country: true,
            ten_printed: true,
            lost_or_stolen: true,
            lost_or_stolen_year: 0,
            lost_or_stolen_reason: 'string',
            revoked: true,
            revoked_reason: 'string',
        },
        us_drivers_license: [
            {
                number: 'string',
                state: 'AL',
            },
        ],
        refused_us_visa: true,
        refused_us_visa_reason: 'string',
        immigrant_petition: true,
        immigrant_petition_reason: 'string',
        address: {
            street: 'string',
            complement: 'string',
            city: 'string',
            state: 'string',
            state_acronym: 'string',
            zip_code: 'string',
            country: 'AFGH',
        },
        mailing_address: {
            street: 'string',
            complement: 'string',
            city: 'string',
            state: 'string',
            state_acronym: 'string',
            zip_code: 'string',
            country: 'AFGH',
        },
        primary_phone_number: 'string',
        secondary_phone_number: 'string',
        work_phone_number: 'string',
        other_phone_numbers: ['string'],
        email_address: 'string',
        other_email_adresses: ['string'],
        social_medias: [
            {
                platform: 'ASKF',
                identifier: 'string',
            },
        ],
        passport: {
            document_type: 'R',
            number: 'string',
            custom_document_reason: 'string',
            book_number: 'string',
            country: 'AFGH',
            city: 'string',
            state: 'string',
            issuance_date: '2023-11-08',
            expiration_date: '2023-11-08',
            lost_reason: 'string',
        },
        lost_or_stolen_passports: [
            {
                document_type: 'R',
                number: 'string',
                custom_document_reason: 'string',
                book_number: 'string',
                country: 'AFGH',
                city: 'string',
                state: 'string',
                issuance_date: '2023-11-08',
                expiration_date: '2023-11-08',
                lost_reason: 'string',
            },
        ],
        us_contact: {
            person_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            organization_name: 'string',
            relationship: 'R',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'AL',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            phone_number: 'string',
            email: 'string',
        },
        father: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth_date: '2023-11-08',
            locating_in_us: true,
            us_status: 'S',
        },
        mother: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth_date: '2023-11-08',
            locating_in_us: true,
            us_status: 'S',
        },
        immediate_relatives: [
            {
                name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
                locating_in_us: true,
                relationship: 'S',
                us_status: 'S',
            },
        ],
        any_other_relative_in_us: true,
        primary_occupation: {
            occupation_type: 'A',
            specify_occupation: 'string',
            entity_name: 'string',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            phone_number: 'string',
            start_date: '2023-11-08',
            end_date: '2023-11-08',
            monthly_income: 0,
            description: 'string',
            occupation_title: 'string',
            supervisor_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
        },
        past_jobs: [
            {
                occupation_type: 'A',
                specify_occupation: 'string',
                entity_name: 'string',
                address: {
                    street: 'string',
                    complement: 'string',
                    city: 'string',
                    state: 'string',
                    state_acronym: 'string',
                    zip_code: 'string',
                    country: 'AFGH',
                },
                phone_number: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
                monthly_income: 0,
                description: 'string',
                occupation_title: 'string',
                supervisor_name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
            },
        ],
        education: [
            {
                occupation_type: 'A',
                specify_occupation: 'string',
                entity_name: 'string',
                address: {
                    street: 'string',
                    complement: 'string',
                    city: 'string',
                    state: 'string',
                    state_acronym: 'string',
                    zip_code: 'string',
                    country: 'AFGH',
                },
                phone_number: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
                monthly_income: 0,
                description: 'string',
                occupation_title: 'string',
                supervisor_name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
            },
        ],
        clan: 'string',
        languages: ['string'],
        visited_countries: ['AFGH'],
        charitable_organizations: ['string'],
        specialized_skills: 'string',
        military_info: [
            {
                country: 'AFGH',
                branch_of_service: 'string',
                rank: 'string',
                specialty: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
            },
        ],
        special_organization: 'string',
        security_responses: ['string', null],
    });

    console.log(data)
    
    const updateData = (newData) => {
        setData({ ...data, ...newData });
    };

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
