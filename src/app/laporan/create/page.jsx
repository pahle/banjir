import React from 'react'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { createReport } from '@/utils/query'

const page = () => {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Tambah Laporan
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href="/laporan" color="slate">
            Batal
          </Button>
        </div>
      </div>
      <form
        action={createReport}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Title"
          name="title"
          type="text"
          required
        />
        <TextField
          className="col-span-full"
          label="Content"
          name="content"
          type="text"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Submit <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </>
  )
}

export default page
