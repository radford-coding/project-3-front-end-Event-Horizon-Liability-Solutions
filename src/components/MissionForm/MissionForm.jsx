import { useParams, useNavigate } from "react-router";
import * as userService from '../../services/userService';
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
// import './MissionForm.css';

const MissionForm = (props) => {
    const { user } = useContext(UserContext);
    const { missionId } = useParams();
    const [missionFormData, setMissionFormData] = useState(props.mission);
    const navigate = useNavigate();

    const handleupdateReport = (evt) => {
        setMissionFormData({
            ...missionFormData,
            report: evt.target.value,
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await userService.editMission(user._id, missionId, {
            ...missionFormData,
            isCompleted: true,
        });
        navigate('/missions');
    };

    return (
        <>
            <h3>submit report</h3>
            {}
            <form>
                <textarea
                    name='report'
                    id='report-input'
                    value={missionFormData.report}
                    onChange={handleupdateReport}
                ></textarea>
                <br />
                <button
                    type='submit'
                    disabled={!missionFormData.report.length > 0}
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </form>
        </>
    );

};

export default MissionForm