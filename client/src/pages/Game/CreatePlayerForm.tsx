import { useState } from 'react'
import { createPlayer } from '../../api/GameApi'
import { CreatePlayerFormProps } from '../../types'
import { CreatePlayerFormData } from '../../types'

const CreatePlayerForm: React.FC<CreatePlayerFormProps> = ({ playerData, setPlayerData }) => {
  const [formData, setFormData] = useState<CreatePlayerFormData>({ name: '' })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      const result = await createPlayer(formData)
      console.log('Login successful')
      console.log(result)

      setPlayerData((oldPlayerData) => ({
        ...oldPlayerData,
        name: formData.name
      }))
      setSuccess(true)
      setFormData({ name: '' })
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("Unknown error!")
      }
      console.log('Error during player creation: ', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Character name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create character</button>
      </form>
      {success ? (
        <p ><span className="green">Created successfully!</span> Proceed to game</p>
      ) : ( '' )}
      {error ? (
        <p>Error: {error}</p>
      ) : ( '' )}
    </>
  )
}

export default CreatePlayerForm