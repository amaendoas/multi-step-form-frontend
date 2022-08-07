import * as C from './styles'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import { Header } from '../../components/Header'
import { Area } from '../../components/Area'
import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { MdOutlineRadioButtonUnchecked} from "react-icons/md"
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'

export function Step4() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  function handleBudgetChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setBudget,
      payload: e.target.value
    })
  }

  function handlePreviousStep() {
    navigate("/step3")
  }

 async function handleSubmit() {

    if(state.budget === '') {
      alert('Selecione um range de orçamento!')
    } else if(state.name === '' || state.email === '' || state.phone === 0 || state.service === '' || state.projectName === '' || state.projectDescription === '') {
      alert('Ops! confira se você preencheu todos os dados para enviar sua proposta!')
    } else {
      const confirm = window.confirm('Tem certeza que quer enviar sua proposta?')
      
      if(confirm) {
        console.log(state)
        navigate("/submitted")
      }
    }
  }

  useEffect(() => {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      })
  }, [])

  return (
    <C.Container>
      <Header/>
      <C.Main>
        <Section>
          <SectionTitle
          title='What’s your project budget?' description='Please select the project budget range you have in mind.'/>
          <C.Budgets>
            <Area
            name="budget"
            icon={MdOutlineRadioButtonUnchecked} value="less than $5.000"
            onChange={handleBudgetChange}
            checked={state.budget === 'less than $5.000'}
            />

            <Area
            name="budget"
            icon={MdOutlineRadioButtonUnchecked} value="$5.000-$10.000"
            onChange={handleBudgetChange}
            checked={state.budget === '$5.000-$10.000'}
            />

            <Area
            name="budget"
            icon={MdOutlineRadioButtonUnchecked} value="$10.000-$30.000"
            onChange={handleBudgetChange}
            checked={state.budget === '$10.000-$30.000'}
            />

            <Area
            name="budget"
            icon={MdOutlineRadioButtonUnchecked} value="$30.000 +"
            onChange={handleBudgetChange}
            checked={state.budget === '$30.000 +'}
            />

          </C.Budgets>
        </Section>
        <C.Buttons>
          <ButtonOutline onClick={handlePreviousStep} title='Previous Step'/>
          <Button
          onClick={handleSubmit}
          title='Submit'/>
        </C.Buttons>
      </C.Main>
      <Footer/>
    </C.Container>
  )
}