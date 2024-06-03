import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './form'
import { Control, FieldPath } from 'react-hook-form'
import { Input } from './input'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}


const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input placeholder={placeholder} type={name === 'password' ? 'password' : 'text'} className='input-class' {...field} />
                        </FormControl>
                        <FormMessage className='form-message mt-2'></FormMessage>
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput