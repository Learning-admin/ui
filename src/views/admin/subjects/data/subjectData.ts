type RowObj = {
	name: string;
	subCat: Object;
	status: number;
	_id: string;
	entityType: string
};

const subjectData: RowObj[] = [
    {
        "name": "Math",
        "subCat": [
            "EA (Pre - Algebra / Elementary Algebra)",
            "AG (Intermediate Algebra / Co-Ordinate Geometry)",
            "GT (Plane Geometry / Trigonometry)"
        ],
        "status": 1,
        "_id": "607252fc789819c5d2621d6d",
        "entityType": "act"
    },
    {
        "name": "Science",
        "subCat": [
            "Data Interpretation",
            "Research Summaries",
            "Conflict View Points"
        ],
        "status": 1,
        "_id": "60725308789819c5d2621d6e",
        "entityType": "act"
    },
    {
        "name": "Reading",
        "subCat": [
            "SS (Social Studies / Sciences)",
            "AL (Arts / Literature)"
        ],
        "status": 1,
        "_id": "60725312789819c5d2621d6f",
        "entityType": "act"
    }
]

export default subjectData;
