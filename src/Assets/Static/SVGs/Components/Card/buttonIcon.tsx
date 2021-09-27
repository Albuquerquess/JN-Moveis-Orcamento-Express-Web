import * as React from "react"

function ButtonIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" {...props}>
      <g data-name="Camada 2">
        <g data-name="Camada 1">
          <g data-name="Grupo 413">
            <circle data-name="Elipse 6" cx={19} cy={19} r={19} fill="#fff" />
            <path
              fill={props.active ? '#AC0000' : "#00D84F"}
              d="M29 16.5h-7.5V9h-5v7.5H9v5h7.5V29h5v-7.5H29v-5z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ButtonIcon
