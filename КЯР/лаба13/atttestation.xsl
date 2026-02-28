<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
        <head>
            <style>
                table {
                    width: 50%;
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
                .red {
                    background-color: #ffcccc;
                }
                .green {
                    background-color: #ccffcc;
                }
            </style>
        </head>
        <body>
            <h2>Таблица аттестации студентов</h2>
            <table>
            <thead>
                <tr>
                    <th>Имя студента</th>
                    <th>Математика</th>
                    <th>Физика</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="Attestation/Student">
                        <tr>
                            <td><xsl:value-of select="Name"/></td>
                            <td>
                                <xsl:attribute name="class">
                                    <xsl:choose>
                                        <xsl:when test="Grade &lt; 4">
                                            <xsl:value-of select="'red'"/>
                                        </xsl:when>
                                        <xsl:when test="Grade &gt; 8">
                                            <xsl:value-of select="'green'"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </xsl:attribute>
                                <xsl:value-of select="Grade"/>
                            </td>
                            <td>
                                <xsl:attribute name="class">
                                    <xsl:choose>
                                        <xsl:when test="Grade1 &lt; 4">
                                            <xsl:value-of select="'red'"/>
                                        </xsl:when>
                                        <xsl:when test="Grade1 &gt; 8">
                                            <xsl:value-of select="'green'"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </xsl:attribute>
                                <xsl:value-of select="Grade1"/>
                            </td>
                        </tr>
                </xsl:for-each>
                </tbody>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>