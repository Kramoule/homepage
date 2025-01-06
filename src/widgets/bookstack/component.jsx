import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;

  const { data: shelvesData, error: shelvesError } = useWidgetAPI(widget, "shelves");
  const { data: booksData, error: booksError } = useWidgetAPI(widget, "books");
  const { data: pagesData, error: pagesError } = useWidgetAPI(widget, "pages");

  if (shelvesError || booksError || pagesError) {
    const finalError = shelvesError ?? booksError ?? pagesError;
    return <Container service={service} error={finalError} />;
  }

  if (!shelvesData || !booksData || !pagesData) {
    return (
      <Container service={service}>
        <Block label="bookstack.shelves" />
        <Block label="bookstack.books" />
        <Block label="bookstack.pages" />
      </Container>
    );
  }

  return (
    <Container service={service}>
      <Block label="bookstack.shelves" value={t("common.number", { value: shelvesData.total })} />
      <Block label="bookstack.books" value={t("common.number", { value: booksData.total })} />
      <Block label="bookstack.pages" value={t("common.number", { value: pagesData.total })} />
    </Container>
  );
}
