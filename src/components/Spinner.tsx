import { SpinnerContainer } from '@/styles/components/spinner'

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  )
}
