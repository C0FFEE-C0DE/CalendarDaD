$(function () {
  $("#scheduler").dxScheduler({
    dataSource: data,
    currentView: "timelineDay",
    currentDate: new Date("2023-11-15"),
    firstDayOfWeek: 0,
    startDayHour: 8,
    endDayHour: 20,
    cellDuration: 60,
    maxAppointmentsPerCell: 'unlimited',
    groups: ["priority"],
    resources: [
      {
        fieldExpr: "ownerId",
        allowMultiple: false,
        dataSource: resourcesData,
        label: "Owner",
        useColorAsDefault: true,
      },
      {
        fieldExpr: "priority",
        allowMultiple: false,
        dataSource: priorityData,
        label: "Priority",
      },
    ],
    height: 1000,
  });
});
const resourcesData = [
  {
    text: "020253011",
    id: 1,
    color: "#1A6B5F",
  },
  {
    text: "020253002",
    id: 2,
    color: "#1FCBA4",
  },
  {
    text: "020253006",
    id: 3,
    color: "#4077E5",
  },
  {
    text: "020253015",
    id: 4,
    color: "#1F5A8E",
  },

  {
    text: "020253007",
    id: 5,
    color: "#2F2146",
  },

  {
    text: "020003225",
    id: 6,
    color: "#8130FC",
  },
  {
    text: "020003227",
    id: 7,
    color: "#CC6EC1",
  },
  {
    text: "xxxxxxxxx",
    id: 8,
    color: "#DABEC6",
  },
  {
    text: "08xxxxxxx",
    id: 9,
    color: "#B2AE53",
  },
];

const priorityData = [
  {
    text: "จันทร์",
    id: 1,
    color: "#1e90ff",
  },
  {
    text: "อังคาร",
    id: 2,
    color: "#ff9747",
  },
  {
    text: "พุธ",
    id: 3,
    color: "#ff9747",
  },
  {
    text: "พฤหัสบดี",
    id: 4,
    color: "#ff9747",
  },
  {
    text: "ศุกร์",
    id: 5,
    color: "#ff9747",
  },

];

const data = [
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 2,
        "text": "DIGI & LOGIC CIRC DESGN LAB L.1",
        "description": "ผู้ช่วยศาสตราจารย์นริศร แสงคะนอง\nผู้ช่วยศาสตราจารย์จุมพล อุดมชัยบรรเจิด",
        "ownerId": [
            1
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 5,
        "text": "DIGI & LOGIC CIRC DESGN LAB L.2",
        "ownerId": [
            1
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 5,
        "text": "DIGI & LOGIC CIRC DESGN LAB L.3",
        "ownerId": [
            1
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 4,
        "text": "ENGINEERING MECHANICS S.1",
        "ownerId": [
            2
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 4,
        "text": "ENGINEERING MECHANICS S.2",
        "ownerId": [
            2
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 5,
        "text": "ELECTROMAGNETIC FIELDS S.1",
        "ownerId": [
            3
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 4,
        "text": "ELECTROMAGNETIC FIELDS S.2",
        "ownerId": [
            3
        ]
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 3,
        "text": "ENGINEERING ELECTRONICS LAB L.1",
        "ownerId": 4
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 2,
        "text": "ENGINEERING ELECTRONICS LAB L.2",
        "ownerId": 4
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T10:00:00.000Z",
        "endDate": "2023-11-15T13:00:00.000Z",
        "priority": 2,
        "text": "ENGINEERING ELECTRONICS LAB L.3",
        "ownerId": 4
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T18:00:00.000Z",
        "endDate": "2023-11-15T18:00:00.000Z",
        "priority": 1,
        "text": "CONTROL SYSTEMS S.1",
        "ownerId": 5
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T07:00:00.000Z",
        "endDate": "2023-11-15T10:00:00.000Z",
        "priority": 3,
        "text": "CONTROL SYSTEMS S.2",
        "ownerId": 5
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 2,
        "text": "CONTROL SYSTEMS S.3",
        "ownerId": 5
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 4,
        "text": "CONTROL SYSTEMS S.1",
        "ownerId": 5
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 1,
        "text": "TEACH METH IN VOC & TECH EDU S.1",
        "ownerId": 6
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 2,
        "text": "TEACH METH IN VOC & TECH EDU S.2",
        "ownerId": 6
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T09:00:00.000Z",
        "priority": 3,
        "text": "TEACH METH IN VOC & TECH EDU S.3",
        "ownerId": 6
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T01:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 2,
        "text": "INNOVA & INSTRUC MEDIA S.1",
        "ownerId": 7
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T10:00:00.000Z",
        "priority": 5,
        "text": "INNOVA & INSTRUC MEDIA S.2",
        "ownerId": 7
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T06:00:00.000Z",
        "endDate": "2023-11-15T10:00:00.000Z",
        "priority": 5,
        "text": "INNOVA & INSTRUC MEDIA S.3",
        "ownerId": 7
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 4,
        "text": "ENGLISH II S.75",
        "ownerId": 9
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 4,
        "text": "ENGLISH II S.74",
        "ownerId": 9
    },
    {
        "allDay": false,
        "startDate": "2023-11-15T02:00:00.000Z",
        "endDate": "2023-11-15T05:00:00.000Z",
        "priority": 1,
        "text": "ENGLISH II S.73",
        "ownerId": 9
    }
];
