import { emailValidate } from "services/validation"

export const Approvals = () => {
    return <div>
        <input
            type="text"
            className="inputField"
            onChange={(e) => emailValidate(e.target.value)}
        />
    </div>
}

export default Approvals