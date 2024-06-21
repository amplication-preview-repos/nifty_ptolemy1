/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnterpriseWhereUniqueInput } from "./EnterpriseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnterpriseUpdateInput } from "./EnterpriseUpdateInput";

@ArgsType()
class UpdateEnterpriseArgs {
  @ApiProperty({
    required: true,
    type: () => EnterpriseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseWhereUniqueInput)
  @Field(() => EnterpriseWhereUniqueInput, { nullable: false })
  where!: EnterpriseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EnterpriseUpdateInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseUpdateInput)
  @Field(() => EnterpriseUpdateInput, { nullable: false })
  data!: EnterpriseUpdateInput;
}

export { UpdateEnterpriseArgs as UpdateEnterpriseArgs };