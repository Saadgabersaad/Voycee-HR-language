import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import React from 'react'
import { Search } from 'modules/core/components/Search'
import {AddPosition} from "./AddPosition";
import {usePositions} from "../hooks/use-positions";
import {Table} from "modules/hhrr/positions/components/PositionTable";

export default function Positions() {
    const {
        data,
        isLoading,
        onSearch,
        onCreatePosition
    } = usePositions()

    console.log(isLoading)


  return (

    <Page>
      <Heading
        title='Positions'
        description={`View your Company’s Positions across all departments`}
      >
        <HeadingActions
          buttonText='Add Position'
          mainModal={<AddPosition create={onCreatePosition} />}
        />
      </Heading>
      <Search onSearch={onSearch} />
      <Table rows={data} loading={isLoading}  />
    </Page>
  )
}
