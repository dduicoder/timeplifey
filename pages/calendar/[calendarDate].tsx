import { GetStaticPropsContext } from "next";
import { FC } from "react";

import Calendar from "../../components/calendar/Calendar";

const CalendarPage: FC<{
  date: string;
}> = ({ date }) => {
  return <Calendar date={date} />;
};

export default CalendarPage;

export const getStaticPaths = async () => {
  const dates = ["2022-11-14", "2022-11-20"];
  return {
    fallback: "blocking",
    paths: dates.map((date) => ({
      params: { calendarDate: date },
    })),
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const date: string = params?.calendarDate?.toString() || "";

  if (isNaN(Date.parse(date))) {
    return {
      props: {
        date: "0",
      },
    };
  }

  return {
    props: {
      date,
    },
  };
};
