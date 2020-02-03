import styled from '@emotion/styled'

export const StyledImagesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-gap: 1rem;
`

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
        height: 40px;
        font-size: 16px;
        max-width: 100%;
        width: 100%;
        padding: 0 10px;
        background: #fff;
        color: #666;
        border: 1px solid #e5e5e5;
    }
    button {
        height: 40px;
        padding: 5px 10px;
        border: 0px;
        font-size: 16px;
        background-color: #39f;
        color: white;
    }
`